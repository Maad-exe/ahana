import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Classes from "@/pages/Classes";
import ClassDetails from "@/pages/ClassDetails";
import Trainers from "@/pages/Trainers";
import Gallery from "@/pages/Gallery";
import Blog from "@/pages/Blog";
import BlogDetails from "@/pages/BlogDetails";
import Contact from "@/pages/Contact";
import Schedule from "@/pages/Schedule";

function Router() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/classes" component={Classes} />
        <Route path="/classes/:id" component={ClassDetails} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/schedule" component={Schedule} />
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
}

function App() {
  return (
    <TooltipProvider>
      <Toaster />
      <Router />
    </TooltipProvider>
  );
}

export default App;
