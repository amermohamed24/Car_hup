'use client'
import { generateCarImageUrl } from '@/apis'
import { CarCardProps } from '@/types'
import { Transition, Dialog } from '@headlessui/react'
import { url } from 'inspector'
import Image from 'next/image'
import React, { Fragment } from 'react'


interface CarDetailsProps{
    isOpen:boolean
    closeModal:()=>void
    car:CarCardProps
}



const CarDetails = ({isOpen,closeModal,car}:CarDetailsProps) => {
  return (
    <>
<Transition appear show={isOpen} as={Fragment}>
  <Dialog as="div" className="relative z-10" onClose={closeModal}>
    <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    >
        <div className="fixed inset-0 bg-black/25" />
    </Transition.Child>

    <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
        <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
            <button 
                type='button'
                className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full'
                onClick={closeModal}
                >
                <Image
                src='/close.svg'
                alt='close'
                width={20}
                height={20}
                className='object-contain'
                />
            </button>
            <div className='flex-1 flex flex-col gap-3'>
                <div className='relative w-full h-40 bg-pattern bg-cover bg-center rounded-lg'>
                    <Image src={generateCarImageUrl(car)} alt='car model' fill priority className='object-contain' />
                </div>
                <div className='flex gap-3'>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src={generateCarImageUrl(car,'29')} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image src={generateCarImageUrl(car,'33')} alt='car model' fill priority className='object-contain' />
                    </div>
                    <div className='flex-1 relative w-full h-24 bg-primary-blue-100 rounded-lg'>
                        <Image  src={generateCarImageUrl(car,'13')} alt='car model' fill priority className='object-contain' />
                    </div>
                </div>
            </div>
            <div className='flex flex-1 flex-col gap-4 mt-4'>
                <div className='my-auto text-[18px] font-bold first-letter:uppercase'>
                    {car.make} {car.model}
                </div>
                <div className='text-right text-grey'>
                    {
                        Object.entries(car).map(([key,value])=>(
                            <div className='flex justify-between flex-wrap w-full ' key={key}>
                                <div className='t'>
                                    {key}
                                </div>
                                <div className='text-black'>{value}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            </Dialog.Panel>
        </Transition.Child>
        </div>
    </div>
    </Dialog>
</Transition>
</>
)
}

export default CarDetails




