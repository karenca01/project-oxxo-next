'use client';
import { ReactNode } from 'react';

import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { Image } from "@heroui/react";

export default function CreateUser({children, icon, photo}: {children: ReactNode,icon: ReactNode, photo: string|undefined}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Image 
      src={photo} 
      onClick={onOpen}
      isZoomed
      className="object-cover"
      classNames={{img: "size-60"}}
      />
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='w-full'>
          {() => (
            <>
              <ModalBody>
                {children}
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}