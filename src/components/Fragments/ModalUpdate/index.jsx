import PropTypes from "prop-types";
import Modal from "../../Elements/Modal";
import Button from "../../Elements/Button";
import { useState } from "react";
import TextArea from "../../Elements/TextArea/Index";

const ModalUpdate = (props) => {
  const { setUpdateUser, updateUser, handleUpdate } = props;
  const [updateData, setUpdateData] = useState({ name: updateUser.name });

  const handleChange = (e) => {
    setUpdateData({
      name: e.target.value,
    });
  };

  const handleSubmit = () => {
    handleUpdate(updateUser.id, updateData.name);
    setUpdateUser({});
  };

  return (
    <Modal onClose={setUpdateUser}>
      <h1 className="mb-2 font-semibold">Text</h1>
      <TextArea
        className="w-full h-24 "
        name="update"
        defaultValue={updateData.name}
        onChange={(e) => handleChange(e)}
      />
      <div className="flex justify-between gap-2">
        <Button
          variant="bg-blue-500"
          className="w-24 mt-3"
          onClick={() => setUpdateUser({})}
        >
          Batalkan
        </Button>
        <Button
          variant="bg-red-500"
          className="w-24 mt-3"
          onClick={() => handleSubmit()}
        >
          Update
        </Button>
      </div>
    </Modal>
  );
};

ModalUpdate.propTypes = {
  setUpdateUser: PropTypes.func,
  updateUser: PropTypes.any,
  handleUpdate: PropTypes.func,
};

export default ModalUpdate;
