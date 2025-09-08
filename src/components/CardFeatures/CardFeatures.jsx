import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function CardFeature() {

    const promocoes = [
        {
            id: 1,
            titulo: 'Titulo 1',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur!',
            action: 'Assinar!'
        },
        {
            id: 2,
            titulo: 'Titulo 2',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur!',
            action: 'Assinar!'
        },
        {
            id: 3,
            titulo: 'Titulo 3',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur!',
            action: 'Assinar!'
        },
        {
            id: 4,
            titulo: 'Titulo 4',
            descricao: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, pariatur!',
            action: 'Assinar!'
        },
    ]

    return (
        <div className="container mx-auto max-w-2/4 grid grid-rows-2 grid-cols-2 justify-items-center gap-x-40">
            {promocoes.map((promocao) => (
                <Card key={promocao.id} className={'size-100'}>
                    <CardHeader>
                        <CardTitle>{promocao.titulo}</CardTitle>
                        <CardDescription>{promocao.descricao}</CardDescription>
                        <CardAction>{promocao.action}</CardAction>
                    </CardHeader>
                    <CardContent>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolorem totam sint quasi, dolore earum.</p>
                    </CardContent>
                    <CardFooter>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}