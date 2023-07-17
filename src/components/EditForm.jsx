function EditForm() {
  return (
    <>
      <label htmlFor='textinput'>編集内容</label>
      <input type='text' id='textinput' />
      <select name='selection' id='selected'>
        <option value='selection'></option>
        <option value='selection'></option>
        <option value='selection'></option>
      </select>
      <button>保存</button>
    </>
  )
}
