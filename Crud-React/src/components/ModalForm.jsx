export default function ModalForm({ isOpen, onClose, mode, onSubmit }) {
  return (
    <>
      <input
        type="checkbox"
        id="my_modal_3"
        className="modal-toggle"
        checked={isOpen}
        onChange={() => {}}
      />
      <div className="modal">
        <div className="modal-box relative">
          <button
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
          <h3 className="font-bold text-lg py-4">
            {mode === "edit" ? "Edit Client" : "Client Details"}
          </h3>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
            }}
          >
            <button type="submit" className="btn btn-success" onClick={onClose}>
              {mode === "edit" ? "Save Changes" : "Add Client"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}