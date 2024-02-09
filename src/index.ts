import './index.css';
import Start from './Start';
import 'animate.css';
import 'boxicons';
import DOMPurify from 'dompurify';

document.addEventListener('DOMContentLoaded', () => {
  const DOM = document.getElementById('app') as HTMLDivElement | null;

  if (DOM) {
    const content = DOM.innerHTML;
    const sanitizedContent = DOMPurify.sanitize(content);
    DOM.innerHTML = sanitizedContent;
    Start(DOM);
  }
});
