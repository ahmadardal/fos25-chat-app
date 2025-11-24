import { Pencil, Check, X } from "lucide-react";

export default function MessageBubble({
  msg,
  isSelf,
  editingId,
  editText,
  setEditingId,
  setEditText,
  saveEdit,
}: Props) {
  const isEditing = editingId === msg.id;

  return (
    <div className={`tg-msg ${isSelf ? "self" : "other"}`}>
      {!isSelf && <div className="tg-name">{msg.sender}</div>}

      <div className="bubble-wrapper">
        <div className="tg-bubble">
          {isEditing ? (
            <input
              className="edit-input"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              autoFocus
            />
          ) : (
            msg.message
          )}
        </div>

        {isSelf && !isEditing && (
          <button
            className="edit-btn"
            onClick={() => {
              setEditingId(msg.id);
              setEditText(msg.message);
            }}
          >
            <Pencil size={13} />
          </button>
        )}

        {isSelf && isEditing && (
          <div className="edit-actions">
           <button onClick={() => saveEdit(msg.id)} className="save-btn">
  <Check size={13} />
</button>

<button onClick={() => setEditingId(null)} className="cancel-btn">
  <X size={13} />
</button>
          </div>
        )}
      </div>
    </div>
  );
}
