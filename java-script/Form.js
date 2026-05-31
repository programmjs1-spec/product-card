class Form {
  constructor(selector) {
    this.form = document.querySelector(selector)
 
    if (!this.form) {
      console.error('Form non found:', selector)
      return
    }
  }

  getValues() {
    const formData = new FormData(this.form)
    
    return Object.fromEntries(formData.entries())
  }

  isValid() {
    return this.form.checkValidity()
  }

  reset() {
    if (this.form) {
      this.form.reset()
    }
  }
}

export default Form