import { ModeToggle } from "../Themes/BotaoTema";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { Separator } from "../ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input"
import { X } from "lucide-react";


export default function Header() {

    return (
        <header>
            <div className="h-20 bg-gradient-to-b dark:from-secondary/50 from-neutral-300 to-background flex justify-between items-center px-10">
                <NavigationMenu viewport={false}>

                    <NavigationMenuList className={'gap-7'}>

                        <NavigationMenuItem>
                            <Avatar className={'size-30'}>
                                <AvatarImage src={'/zenith-escuro.png'} className={'hidden dark:block'} />
                                <AvatarImage src={'/zenith-claro.png'} className={'dark:hidden'} />
                                <AvatarFallback>Logotipo Zenith</AvatarFallback>
                            </Avatar>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button asChild>
                                <NavigationMenuTrigger>
                                    Planos
                                </NavigationMenuTrigger>
                            </Button>
                            <NavigationMenuContent>
                                <ul className="grid grid-cols-4 w-85 text-center justify-items-center text-lg font-bold m-1 gap-4 p-2">
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Essencial</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Turbo</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Equilíbrio</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Pro</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Equipe</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Visionário</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-4 px-3 rounded-md cursor-pointer'}>Teste grátis</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>

                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="outline">Avaliar</Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent className={'flex flex-col items-center bg-background/0 border-0 shadow-none'}>
                                    <Card className="w-full max-w-sm">
                                        <CardHeader>
                                            <CardTitle>Login to your account</CardTitle>
                                            <CardDescription>
                                                Enter your email below to login to your account
                                            </CardDescription>
                                            <CardAction>
                                                <Button variant="link">Sign Up</Button>
                                            </CardAction>
                                        </CardHeader>
                                        <CardContent>
                                            <form>
                                                <div className="flex flex-col gap-6">
                                                    <div className="grid gap-2">
                                                        <Label htmlFor="email">Email</Label>
                                                        <Input
                                                            id="email"
                                                            type="email"
                                                            placeholder="m@example.com"
                                                            required
                                                        />
                                                    </div>
                                                    <div className="grid gap-2">
                                                        <div className="flex items-center">
                                                            <Label htmlFor="password">Password</Label>
                                                            <a
                                                                href="#"
                                                                className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                                                            >
                                                                Forgot your password?
                                                            </a>
                                                        </div>
                                                        <Input id="password" type="password" required />
                                                    </div>
                                                </div>
                                            </form>
                                        </CardContent>
                                        <CardFooter className="flex-col gap-2">
                                            <Button type="submit" className="w-full">
                                                Login
                                            </Button>
                                            <Button variant="outline" className="w-full">
                                                Login with Google
                                            </Button>
                                        </CardFooter>
                                    </Card>

                                    <AlertDialogHeader className={'hidden'}>
                                        <AlertDialogTitle>HIDDEN</AlertDialogTitle>
                                    </AlertDialogHeader>

                                    <AlertDialogFooter className={'w-full flex justify-end'}>
                                        <Button variant="fechar" className={'relative bottom-105 p-4'} asChild>
                                            <AlertDialogCancel><X className="size-4"/></AlertDialogCancel>
                                        </Button>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>

                        </NavigationMenuItem>


                    </NavigationMenuList>
                </NavigationMenu>

                <ModeToggle />
            </div>

            <Separator />

        </header>
    )
}