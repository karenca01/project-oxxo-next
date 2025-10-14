'use client';
import { ReactNode } from 'react';

import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@heroui/react";
import { LuPencil } from 'react-icons/lu';

export default function UpdateLocation({children, store}: {children: ReactNode, store: string | string[] | undefined}) {
  if(!store) return <div />;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} color="primary"><LuPencil size="20"/></Button>
      <Modal className="bg-orange-400" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent className='w-full'>
          {() => (
            <>
              {/* <ModalHeader className="flex flex-col gap-1">Editar tienda</ModalHeader> */}
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