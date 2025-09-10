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

export default function Header() {

    return (
        <header>
            <div className="h-20 bg-gradient-to-b dark:from-secondary/50 from-neutral-400 to-background flex justify-between items-center px-10">
                <NavigationMenu viewport={false}>

                    <NavigationMenuList className={'gap-7'}>

                        <NavigationMenuItem>
                            <Avatar className={'size-30'}>
                                <AvatarImage src={'/zenith-escuro.png'} className={'hidden dark:block'}/>
                                <AvatarImage src={'/zenith-claro.png'} className={'dark:hidden'}/>
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
                                <ul className="grid grid-cols-3 w-90 justify-items-center text-lg font-bold m-1 gap-5 p-2">
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Essencial</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Turbo</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Equilíbrio</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Pro</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Equipe</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Visionário</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Teste grátsis</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button asChild>
                                <NavigationMenuTrigger>
                                    Item One
                                </NavigationMenuTrigger>
                            </Button>
                            <NavigationMenuContent>
                                <ul className="flex flex-wrap w-100 justify-evenly items-center gap-5 p-2">
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-7 rounded-md cursor-pointer'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button asChild>
                                <NavigationMenuTrigger>
                                    Item One
                                </NavigationMenuTrigger>
                            </Button>
                            <NavigationMenuContent>
                                <ul className="flex flex-wrap w-100 justify-evenly items-center gap-5 p-2">
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                        <NavigationMenuItem>
                            <Button asChild>
                                <NavigationMenuTrigger>
                                    Item One
                                </NavigationMenuTrigger>
                            </Button>
                            <NavigationMenuContent>
                                <ul className="flex flex-wrap w-100 justify-evenly items-center gap-5 p-2">
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>

                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>

                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink className={'py-5 px-10'}>Link</NavigationMenuLink>
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>

                    </NavigationMenuList>
                </NavigationMenu>

                <ModeToggle />
            </div>

            <Separator/>

        </header>
    )
}