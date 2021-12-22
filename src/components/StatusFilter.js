function StatusFilter() {
  return (
    <div className="btn-group ms-3">
      <input
        type="radio"
        className="btn-check"
        id="all"
        name="status"
        defaultChecked
        value=""
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="all">
        <i className="fas fa-tasks" />
      </label>
      <input
        type="radio"
        className="btn-check"
        id="done"
        name="status"
        value="true"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="done">
        <i className="fas fa-clipboard-check" />
      </label>
      <input
        type="radio"
        className="btn-check"
        id="doing"
        name="status"
        value="false"
      />
      <label className="btn btn-outline-secondary rounded-0" htmlFor="doing">
        <i className="far fa-clipboard" />
      </label>
    </div>
  );
}

export default StatusFilter;
