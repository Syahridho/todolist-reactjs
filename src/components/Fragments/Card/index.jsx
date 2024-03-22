import { FaRegTrashAlt, FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import Button from "../../Elements/Button";

const Card = (props) => {
  const { children, id, onDelete, onUpdate, handleDone, isDone } = props;
  return (
    <div className="bg-white flex items-center justify-between py-4 px-4 shadow rounded-md ring-1 ring-gray-950/5">
      <div className="flex gap-6">
        <input
          type="checkbox"
          onChange={() => handleDone(id)}
          name="done"
          id="done"
          className="bg-red-500"
          checked={isDone}
        />
        <p
          className={`font-medium text-gray-950 text-wrap ${
            isDone && "line-through"
          }`}
        >
          {children}
        </p>
      </div>
      <div className="flex gap-2">
        <Button variant="bg-blue-500" className="py-2" onClick={onUpdate}>
          <FaEdit />
        </Button>
        <Button variant="bg-red-500" className="py-2" onClick={onDelete}>
          <FaRegTrashAlt id={id} />
        </Button>
      </div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.number,
  onDelete: PropTypes.func,
  onUpdate: PropTypes.func,
  handleDone: PropTypes.func,
  isDone: PropTypes.bool,
};

export default Card;
