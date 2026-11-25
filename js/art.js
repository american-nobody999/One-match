(() => {
    //Author: Leslie Brockman
    //art gallery navigation script
    //Date Modified: 11-25-2026
    'use strict';

    const main = document.querySelector('.art-main');
    if (!main) return;

    const entrance = main.querySelector('.museum-entrance');
    const doors = [...main.querySelectorAll('.museum-gallery-door[data-gallery]')];
    const rooms = new Map([...main.querySelectorAll('.museum-gallery-room')].map(room => [
        room.id, { element: room, heading: room.querySelector('.museum-room-heading') }
    ]));

    if (!entrance || !doors.length ||
        doors.some(door => !rooms.get(door.dataset.gallery)?.heading) ||
        [...rooms.values()].some(room => !room.element.querySelector('.museum-back-btn'))) return;

    let activeRoom = null;
    let activeDoor = null;

    function pauseVideos(view) {
        view.querySelectorAll('video').forEach(video => {
            if (!video.paused) video.pause();
        });
    }

    function openGallery(galleryId, door) {
        const room = rooms.get(galleryId);
        if (!room || activeRoom) return;

        pauseVideos(entrance);
        entrance.hidden = true;
        activeRoom = room.element;
        activeDoor = door;
        activeRoom.hidden = false;
        room.heading.focus();
    }

    function returnToEntrance() {
        if (!activeRoom) return;

        activeRoom.querySelectorAll('[data-featured-exhibition]').forEach(exhibition => {
            exhibition.dispatchEvent(new Event('museum:close-featured-story'));
        });
        pauseVideos(activeRoom);
        activeRoom.hidden = true;
        activeRoom = null;
        entrance.hidden = false;
        activeDoor.focus();
        activeDoor = null;
    }

    doors.forEach(door => {
        door.addEventListener('click', () => openGallery(door.dataset.gallery, door));
        door.disabled = false;
    });

    rooms.forEach(({ element }) => {
        element.querySelector('.museum-back-btn').addEventListener('click', returnToEntrance);
    });
})();
