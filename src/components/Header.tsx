import { Bell, MessageCircle, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";
import defaultAvatar from "@/assets/default-avatar.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center shadow-soft">
            <span className="text-white font-bold text-sm">EN</span>
          </div>
          <span className="font-bold text-xl text-primary">English Hub</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
            <Link to="/">Início</Link>
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
            <Link to="/forum">Fóruns</Link>
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
            <Link to="/study-groups">Grupos</Link>
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary" asChild>
            <Link to="/ranking">Ranking</Link>
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary">
            Comunidade
          </Button>
        </nav>

        {/* Search */}
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar discussões, usuários..."
              className="pl-10 bg-muted/50 border-muted focus:bg-background"
            />
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-destructive text-destructive-foreground text-xs">
              3
            </Badge>
          </Button>
          
          <Button variant="ghost" size="icon" className="relative">
            <MessageCircle className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
              2
            </Badge>
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarImage src={defaultAvatar} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};