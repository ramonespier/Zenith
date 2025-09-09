import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { Button } from "../ui/button"

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Testimonials() {

    const testemunhas = [
        {
            id: 1,
            nome: 'rchlvms',
            foto: '/hornet.jpg',
            depoimento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, vero?',
            data: '05/09/2023'
        },
        {
            id: 2,
            nome: 'ramonespier',
            foto: '/holunai.jfif',
            depoimento: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, temporibus harum!',
            data: '03/01/2025'
        },
        {
            id: 3,
            nome: 'xdmfelpz',
            foto: '/ichigo.jpg',
            depoimento: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum vero quisquam dignissimos mollitia.',
            data: '09/09/2025'
        },
    ]

    return (
        <>
            <Accordion
                type="single"
                collapsible
                className="container mx-auto"
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className={'text-xl font-bold'}>Depoimentos</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">

                        <div className="flex gap-10">
                            {testemunhas.map((testemunha) => (
                                <HoverCard key={testemunha.id}>
                                    <HoverCardTrigger asChild>
                                    <Avatar className={'size-25 hover:border-2 transition'}>
                                        <AvatarImage src={testemunha.foto} />
                                        <AvatarFallback>{testemunha.nome}</AvatarFallback>
                                    </Avatar>
                                    </HoverCardTrigger>
                                    <HoverCardContent className="w-80 rounded-full">
                                    <div className="flex justify-between items-center gap-4">
                                        <Avatar className={'size-15'}>
                                            <AvatarImage src={testemunha.foto} />
                                            <AvatarFallback>VC</AvatarFallback>
                                        </Avatar>
                                        <div className="space-y-1">
                                            <h4 className="font-semibold">{testemunha.nome}</h4>
                                            <p className="text-sm">
                                                {testemunha.depoimento}
                                            </p>
                                            <div className="text-muted-foreground underline text-xs">
                                                {testemunha.data}
                                            </div>
                                        </div>
                                    </div>
                                    </HoverCardContent>
                                </HoverCard>
                            ))}
                        </div>

                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </>
    )
}