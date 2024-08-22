class Toast {
    constructor(container) {
      this.container = container || document.body;
    }
  
    createToast(message) {
      const toast = document.createElement('div');
      toast.className = 'toast max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg';
      toast.role = 'alert';
      toast.tabIndex = -1;
  
      toast.innerHTML = `
        <div class="flex-1 flex items-center">
          <div class="shrink-0">
            <svg class="shrink-0 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
            </svg>
          </div>
          <div class="ms-3 flex-1">
            <p class="text-sm text-gray-700 dark:text-neutral-400">${message}</p>
          </div>
          <div class="toast-close text-gray-500 hover:text-gray-700">
            <i class="fas fa-times"></i>
          </div>
          <div class="progress-bar"></div>
        </div>
      `;
  
      toast.querySelector('.toast-close').addEventListener('click', () => this.hideToast(toast));
  
      this.container.appendChild(toast);
  
      setTimeout(() => {
        toast.classList.add('show');
      }, 10);
  
      const progressBar = toast.querySelector('.progress-bar');
      setTimeout(() => {
        progressBar.style.transform = 'scaleX(0)';
      }, 50);
  
      setTimeout(() => {
        this.hideToast(toast);
      }, 5000);
    }
  
    hideToast(toast) {
      toast.classList.add('hide-left');
      setTimeout(() => {
        toast.classList.add('hide-right');
        setTimeout(() => {
          toast.remove();
        }, 500);
      }, 500);
    }
  }
  
  export default Toast;
  