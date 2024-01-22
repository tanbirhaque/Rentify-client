// this component is created by Fahima
// dynamically link added and iframe video connecting problem solved by Tanbir

const VideoModal = ({virtualLink}) => {
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-screen-md h-[500px]">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div className="">
            <iframe width="100%" className="h-[500px]" src={virtualLink} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default VideoModal;
