function Filter() {
  const statusList = [
    { value: 'showAll', label: '全て表示' },
    { value: 'notStarted', label: '未着手' },
    { value: 'inProgress', label: '進行中' },
    { value: 'completed', label: '完了' },
  ]
  const [status, setStatus] = useState(status[0])

  return (
    <>
      <select>
        {statusList.map(({ value, label }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </>
  )
}

export default Filter
