import Container from "./Container";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-baseline">
          <p className="footer-name">{site.name}</p>
          <p>{site.location}</p>
          <p>© 2026</p>
          <a href="#top" className="text-link" aria-label="Back to top of page">Back to top<span aria-hidden="true">↑</span></a>
        </div>
      </Container>
    </footer>
  );
}
