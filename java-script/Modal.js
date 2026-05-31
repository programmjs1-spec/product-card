class Modal {
  constructor(selector) {
    this.modal = document.querySelector(selector)

    if (!this.modal) {
      console.error('Modal not found:', selector)
      return
    }

    this.closeBtn = this.modal.querySelector('.modal-close-button')

    this.handleClose = this.handleClose.bind(this)

    this.init()
  }

  open() {
    this.modal.classList.add('modal-showed')
  }

  close() {
    this.modal.classList.remove('modal-showed')
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed')
  }

  handleClose() {
    this.close()
  }

  init() {
    if (this.closeBtn) {
      this.closeBtn.addEventListener('click', this.handleClose)
    }
  }
}

export default Modal