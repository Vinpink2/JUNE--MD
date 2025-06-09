import { useEffect, useState } from "react"; import { Button } from "@/components/ui/button"; import { Card, CardContent } from "@/components/ui/card"; import { Textarea } from "@/components/ui/textarea"; import { Input } from "@/components/ui/input";

export default function Dashboard() { const [status, setStatus] = useState("Disconnected"); const [logs, setLogs] = useState(""); const [phone, setPhone] = useState(""); const [pairingCode, setPairingCode] = useState("");

const handleStart = async () => { setStatus("Starting..."); const res = await fetch("/api/start-bot"); const data = await res.json(); if (data.status === "running") setStatus("Connected"); };

const handleStop = async () => { setStatus("Stopping..."); const res = await fetch("/api/stop-bot"); const data = await res.json(); if (data.status === "stopped") setStatus("Disconnected"); };

const handlePairing = async () => { const res = await fetch("/api/pair", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone }), }); const data = await res.json(); setPairingCode(data.code); };

useEffect(() => { const interval = setInterval(async () => { const res = await fetch("/api/logs"); const data = await res.text(); setLogs(data); }, 5000); return () => clearInterval(interval); }, []);

return ( <main className="grid gap-4 p-4"> <h1 className="text-2xl font-bold">Gifted-dave-md Panel</h1> <Card> <CardContent className="grid gap-4 p-4"> <p>Status: <strong>{status}</strong></p> <div className="flex gap-4"> <Button onClick={handleStart}>Start Bot</Button> <Button variant="destructive" onClick={handleStop}>Stop Bot</Button> </div> <div className="flex gap-2 items-center"> <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number..." /> <Button on
