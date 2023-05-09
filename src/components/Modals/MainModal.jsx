import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useRef, React } from "react";
import { IoClose } from "react-icons/io5";
import CategoryModal from "./CategoryModal";

function MainModal({ modalOpen, setModalOpen }) {
  console.log(modalOpen);
  const cancelButtonRef = useRef();
  return (
    <>
      <Transition show={modalOpen} as={Fragment} appear>
        <Dialog
          as="div"
          className="fixed inset-0 z-30 overflow-y-auto text-center"
          initialFocus={cancelButtonRef}
          onClose={() => setModalOpen(false)}
        >
          <div className="min-h-screen px-4 ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300 "
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-60" />
            </Transition.Child>
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <div className=" absolute top-24 right-12">
                  <button
                    onClick={() => setModalOpen(false)}
                    type="button"
                    className=" inline-flex  transitions justify-center px-4 py-2 text-base font-medium text-white
                bg-subMain
                rounded-full hover:bg-white hover:text-subMain "
                  >
                    <IoClose />
                  </button>
                </div>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="inline-block text-white sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 h-full bg-main overflow-y-auto ">
                    <CategoryModal setModalOpen={setModalOpen} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default MainModal;
