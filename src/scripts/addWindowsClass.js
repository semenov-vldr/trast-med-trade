function addWindowsClass() {
  if (navigator.userAgent.indexOf('Windows') > -1) {
    document.documentElement.classList.add('windows');
  }
}

document.addEventListener('DOMContentLoaded', addWindowsClass);