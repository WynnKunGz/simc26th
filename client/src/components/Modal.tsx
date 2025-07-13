import { useRef } from "react";

function useModal() {
  const ref = useRef<HTMLDialogElement>(null);

  function open(){
    if(!ref) return;
    ref.current?.showModal();
  }

  function close(){
    if(!ref) return;
    ref.current?.close();
  }

  return { ref, open, close };
}

function Modal() {
  <dialog>
    
  </dialog>
}