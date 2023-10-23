import { ModalBackground } from "./container/ModalBackground";
import { ModalContent } from "./content/ModalContent";

export function Modal() {
  return (
    <ModalBackground>
      <ModalContent />
    </ModalBackground>
  );
}
