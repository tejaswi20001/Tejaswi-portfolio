import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  padding: 18px;
`;

const CardTitle = styled.div`
  font-weight: 800;
  margin-bottom: 8px;
`;

const Sub = styled.p`
  margin: 0 0 14px;
  opacity: 0.75;
  line-height: 1.7;
`;

const LinkBtn = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.03);
  margin-bottom: 10px;
  opacity: 0.92;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: translateY(-1px);
    background: rgba(255, 255, 255, 0.06);
  }
`;

const Form = styled.form`
  display: grid;
  gap: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    border: 1px solid rgba(34, 211, 238, 0.28);
    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.07);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  min-height: 130px;
  padding: 12px 12px;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.92);
  outline: none;
  resize: vertical;

  &::placeholder {
    color: rgba(255, 255, 255, 0.45);
  }

  &:focus {
    border: 1px solid rgba(34, 211, 238, 0.28);
    box-shadow: 0 0 0 4px rgba(34, 211, 238, 0.07);
  }
`;

const Button = styled.button`
  padding: 12px 14px;
  border-radius: 14px;
  font-weight: 900;
  font-size: 14px;
  cursor: pointer;

  background: rgba(59, 130, 246, 0.22);
  border: 1px solid rgba(59, 130, 246, 0.35);
  color: rgba(255, 255, 255, 0.95);
  transition: 0.2s;

  &:hover {
    transform: translateY(-1px);
    background: rgba(59, 130, 246, 0.28);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    transform: none;
  }
`;

const pop = keyframes`
  0% { transform: translateY(6px) scale(0.98); opacity: 0; }
  100% { transform: translateY(0) scale(1); opacity: 1; }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 0 rgba(34,211,238,0); }
  100% { box-shadow: 0 0 0 6px rgba(34,211,238,0.08); }
`;

const StatusWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  border-radius: 14px;
  padding: 10px 12px;
  font-size: 13px;

  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);

  animation: ${pop} 180ms ease-out;

  ${({ $variant }) =>
    $variant === "success" &&
    css`
      border: 1px solid rgba(34, 211, 238, 0.28);
      background: rgba(34, 211, 238, 0.06);
      animation:
        ${pop} 180ms ease-out,
        ${glow} 420ms ease-out;
    `}

  ${({ $variant }) =>
    $variant === "error" &&
    css`
      border: 1px solid rgba(248, 113, 113, 0.28);
      background: rgba(248, 113, 113, 0.06);
    `}
`;

const Icon = styled.span`
  width: 22px;
  height: 22px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  font-weight: 900;
  font-size: 12px;

  ${({ $variant }) =>
    $variant === "success"
      ? css`
          background: rgba(34, 211, 238, 0.18);
          border: 1px solid rgba(34, 211, 238, 0.35);
        `
      : css`
          background: rgba(248, 113, 113, 0.16);
          border: 1px solid rgba(248, 113, 113, 0.3);
        `}
`;

const Status = styled.div`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.04);
  padding: 10px 12px;
  font-size: 13px;
  opacity: 0.9;
`;

export default function ContactSection() {
  const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState(""); // spam trap
  const [status, setStatus] = useState({ state: "idle", msg: "" });

  useEffect(() => {
    if (status.state === "success") {
      const t = setTimeout(() => setStatus({ state: "idle", msg: "" }), 3500);
      return () => clearTimeout(t);
    }
  }, [status.state]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (honeypot) return;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ state: "error", msg: "Please fill all fields." });
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus({
        state: "error",
        msg: "Form endpoint missing. Please set VITE_FORMSPREE_ENDPOINT in .env",
      });
      return;
    }

    setStatus({ state: "loading", msg: "" });

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus({
          state: "success",
          msg: "Thanks! Your message has been sent.",
        });
        setName("");
        setEmail("");
        setMessage("");
        setHoneypot("");
        return;
      }

      let msg = `Something went wrong (status ${res.status}). Please try again.`;

      const text = await res.text().catch(() => "");
      if (text) {
        try {
          const data = JSON.parse(text);
          msg = data?.errors?.[0]?.message || msg;
        } catch {}
      }

      setStatus({ state: "error", msg });
    } catch {
      setStatus({
        state: "error",
        msg: "Network error. Please try again or email me directly.",
      });
    }
  };

  return (
    <Grid>
      <Card>
        <CardTitle>Let’s connect</CardTitle>
        <Sub>
          If you’re hiring or want to collaborate, feel free to reach out. I
          usually respond within 24 hours.
        </Sub>

        <LinkBtn
          href="https://mail.google.com/mail/?view=cm&fs=1&to=methukutejaswi@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span>Email</span>
          <span>→</span>
        </LinkBtn>

        <LinkBtn
          href="https://www.linkedin.com/in/tejaswi-methuku-4a406b3a5/"
          target="_blank"
          rel="noreferrer"
        >
          <span>LinkedIn</span>
          <span>→</span>
        </LinkBtn>

        <LinkBtn
          href="https://github.com/tejaswi20001"
          target="_blank"
          rel="noreferrer"
        >
          <span>GitHub</span>
          <span>→</span>
        </LinkBtn>

        <LinkBtn href="/resume.pdf" target="_blank" rel="noreferrer">
          <span>Resume</span>
          <span>→</span>
        </LinkBtn>
      </Card>

      <Card>
        <CardTitle>Send a message</CardTitle>
        <Sub>Message me directly from this website (no email app needed).</Sub>

        <Form onSubmit={onSubmit} action="#">
          <input
            type="text"
            name="_gotcha"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            placeholder="Your email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />

          <Button type="submit" disabled={status.state === "loading"}>
            {status.state === "loading" ? "Sending..." : "Send"}
          </Button>

          {status.state !== "idle" && (
            <StatusWrap
              $variant={status.state === "success" ? "success" : "error"}
            >
              <Icon $variant={status.state === "success" ? "success" : "error"}>
                {status.state === "success" ? "✓" : "!"}
              </Icon>
              <div>{status.msg}</div>
            </StatusWrap>
          )}
        </Form>
      </Card>
    </Grid>
  );
}
