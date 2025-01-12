import React from "react";

const UserMessage = () => {
  return (
    <div>
        {/* sender message part */}
      <div className="chat chat-start">
        <div className="chat-header">
          <time className="text-xs opacity-50">2 hours ago</time>
        </div>
        <div className="chat-bubble chat-bubble-primary">Hi baby, How are you, what are you doing now?</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>

        {/* your message part */}
      <div className="chat chat-end">
        <div className="chat-header">
          <time className="text-xs opacity-50">2 hours ago</time>
        </div>
        <div className="chat-bubble chat-bubble-success">Hi baby, How are you, what are you doing now?</div>
        <div className="chat-footer opacity-50">Seen</div>
      </div>
    </div>
  );
};

export default UserMessage;
