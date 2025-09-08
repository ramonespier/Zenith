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

export default function Header() {
    return (
        <header>
            <NavigationMenu viewport={false}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Button variant={'menu'} asChild>
                            <NavigationMenuTrigger>
                                Item One
                            </NavigationMenuTrigger>
                        </Button>
                        <NavigationMenuContent>
                            <ul className="grid grid-cols-3 grid-rows-2 w-100 justify-items-center gap-10 p-2">
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
                        <Button variant={'menu'} asChild>
                            <NavigationMenuTrigger>
                                Item One
                            </NavigationMenuTrigger>
                        </Button>
                        <NavigationMenuContent>
                            <ul className="grid grid-cols-3 grid-rows-2 w-100 justify-items-center gap-10 p-2">
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
                        <Button variant={'menu'} asChild>
                            <NavigationMenuTrigger>
                                Item One
                            </NavigationMenuTrigger>
                        </Button>
                        <NavigationMenuContent>
                            <ul className="grid grid-cols-3 grid-rows-2 w-100 justify-items-center gap-10 p-2">
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
                        <Button variant={'menu'} asChild>
                            <NavigationMenuTrigger>
                                Item One
                            </NavigationMenuTrigger>
                        </Button>
                        <NavigationMenuContent>
                            <ul className="grid grid-cols-3 grid-rows-2 w-100 justify-items-center gap-10 p-2">
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
        </header>
    )
}