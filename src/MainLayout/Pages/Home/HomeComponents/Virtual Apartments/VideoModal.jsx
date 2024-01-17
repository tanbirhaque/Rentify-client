const VideoModal = () => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="YouTube Video"
              className="w-full h-full"
              src="https://youtu.be/-afBReLBxeg?si=gZvU_SJk_Ht0kjA0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default VideoModal;
