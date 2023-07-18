function EditForm({ todoTitle, setIsEditFormSelected }) {
  const closeEditForm = () => {
    setIsEditFormSelected(false)
  }

  return (
    <>
      <label htmlFor='textinput'>編集内容: </label>
      <input type='text' label='textinput' value={todoTitle} />
      <button>編集を保存</button>
      <button onClick={closeEditForm}>編集をキャンセル</button>
    </>
  )
}

export default EditForm
