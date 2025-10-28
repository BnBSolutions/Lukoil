import { MapPin, Phone, Search, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <Link to="/tenders" className="hover:text-accent transition-colors">Tenders</Link>
            <Link to="/vacancies" className="hover:text-accent transition-colors">Vacancies</Link>
            <a href="https://www.lukoil.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">Global Business</a>
          </div>
          <div className="flex gap-4 items-center">
            <Phone className="h-4 w-4" />
            <span>1-800-LUKOIL</span>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-3xl font-bold text-primary">
              LUKOIL
            </Link>
            
            <NavigationMenu className="hidden lg:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/company/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">About Us</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about LUKOIL North America
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/company/contacts" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Contacts</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Get in touch with us
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Motorists</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[500px] gap-3 p-4 md:grid-cols-2 bg-card">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/petrol-stations" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Petrol Stations</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find your nearest station
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/products-services" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Products & Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Quality fuel and services
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/lubricants" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Lubricants</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Premium motor oils
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/fleet" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Fleet Services</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Save up to 10¢/gallon
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/club-lukoil" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Club LUKOIL</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Rewards & savings program
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>For Business</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 bg-card">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link to="/for-business" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">Business Solutions</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Commercial fuel services
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link to="/responsibility" className="text-sm font-medium hover:text-primary transition-colors px-4 py-2">
                      Responsibility
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="default" className="hidden md:flex">
              <MapPin className="h-4 w-4" />
              Find Station
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-fade-in">
            <Link to="/company/about" className="block py-2 hover:text-primary transition-colors">About Us</Link>
            <Link to="/petrol-stations" className="block py-2 hover:text-primary transition-colors">Petrol Stations</Link>
            <Link to="/products-services" className="block py-2 hover:text-primary transition-colors">Products & Services</Link>
            <Link to="/lubricants" className="block py-2 hover:text-primary transition-colors">Lubricants</Link>
            <Link to="/fleet" className="block py-2 hover:text-primary transition-colors">Fleet Services</Link>
            <Link to="/club-lukoil" className="block py-2 hover:text-primary transition-colors">Club LUKOIL</Link>
            <Link to="/for-business" className="block py-2 hover:text-primary transition-colors">For Business</Link>
            <Link to="/responsibility" className="block py-2 hover:text-primary transition-colors">Responsibility</Link>
            <Button variant="default" className="w-full mt-4">
              <MapPin className="h-4 w-4" />
              Find Station
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
