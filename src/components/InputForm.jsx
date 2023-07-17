function InputForm() {
  return (
    <form>
      <label htmlFor='title'>タイトル</label>
      <input type='text' id='title' placeholder='タイトル' />
      <label htmlFor='status'>進捗状態</label>
      <input type='radio' id='status' />
      <input type='radio' id='status' />
      <input type='radio' id='status' />
      <button>作成</button>
    </form>
  )
}

export default InputForm
