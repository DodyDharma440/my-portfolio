import { useEffect } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { Transition } from "react-transition-group";

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
`;

export type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  position?: "left" | "right";
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  position = "left",
}) => {
  const duration = 300;
  const drawerWidth = 250;

  const defaultOverlayStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const defaultDrawerStyle = {
    transition: `transform ${duration}ms`,
    left: position === "left" ? -250 : "unset",
    right: position === "right" ? -250 : "unset",
  };

  const drawerTransition = {
    entering: {
      transform: `translateX(${
        position === "right" ? `-${drawerWidth}px` : `${drawerWidth}px`
      })`,
    },
    entered: {
      transform: `translateX(${
        position === "right" ? `-${drawerWidth}px` : `${drawerWidth}px`
      })`,
    },
    exiting: {
      transform: `translateX(${
        position === "right" ? `${drawerWidth}px` : `-${drawerWidth}px`
      })`,
    },
    exited: {
      transform: `translateX(${
        position === "right" ? `${drawerWidth}px` : `-${drawerWidth}px`
      })`,
    },
    unmounted: { opacity: 1 },
  };

  const overlayTransition = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
    unmounted: { opacity: 1 },
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "17px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "0px";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.body.style.marginRight = "0px";
    };
  }, [isOpen]);

  return (
    <>
      {createPortal(
        <>
          <Transition in={isOpen} timeout={duration}>
            {(state) => (
              <div
                style={{
                  ...defaultOverlayStyle,
                  ...overlayTransition[state],
                }}
              >
                {isOpen && <DrawerOverlay onClick={onClose} />}
              </div>
            )}
          </Transition>
          <Transition in={isOpen} timeout={duration}>
            {(state) => (
              <div
                style={{
                  width: drawerWidth,
                  position: "fixed",
                  top: 0,
                  bottom: 0,
                  ...defaultDrawerStyle,
                  ...drawerTransition[state],
                }}
              >
                {children}
              </div>
            )}
          </Transition>
        </>,
        document.body
      )}
    </>
  );
};

export default Drawer;
