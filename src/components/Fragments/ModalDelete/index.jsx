import PropTypes from "prop-types";
import Button from "../../Elements/Button";
import Modal from "./../../Elements/Modal";

const ModalDelete = (props) => {
  const { setDeleteUser, deleteUser, handleDelete } = props;
  return (
    <Modal onClose={setDeleteUser}>
      <h1 className="text-md font-medium text-center">
        Yakin ingin Menghapus?
      </h1>
      <p className="text-center mt-4 mb-6">{deleteUser.name}</p>
      <div className="flex justify-between gap-2">
        <Button
          variant="bg-blue-500"
          className="w-24 mt-3"
          onClick={() => setDeleteUser({})}
        >
          Batalkan
        </Button>
        <Button
          variant="bg-red-500"
          className="w-24 mt-3"
          onClick={() => {
            handleDelete(deleteUser.id), setDeleteUser({});
          }}
        >
          Delete
        </Button>
      </div>
    </Modal>
  );
};

ModalDelete.propTypes = {
  setDeleteUser: PropTypes.func,
  deleteUser: PropTypes.any,
  handleDelete: PropTypes.func,
};

export default ModalDelete;
