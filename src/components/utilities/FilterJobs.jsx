let FilterJobs = (props) =>{
  function onFilterValueChanged(event){
    props.filterValueSelected(event.target.value);
  }

  return (
    <div className="w-full bg-white px-5 py-1">
      <select name="job_type" onChange={onFilterValueChanged}>
        <option>Filter By</option>
        <option value="all">All</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>
    </div>
  )
}
export default FilterJobs;