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

export default function Header() {
    return (
        <header>
            <div className="h-30 bg-gradient-to-b dark:from-secondary/50 from-neutral-400 to-background flex justify-between items-center px-10">
                <NavigationMenu viewport={false}>

                    <NavigationMenuList className={'gap-7'}>

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

            <Separator className={'mt-4'}/>

        </header>
    )
}