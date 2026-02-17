import type { Route } from "./+types/db-health";
import { getPool } from "~/server/db.server";

export async function loader({}: Route.LoaderArgs) {
  try {
    const pool = getPool();
    const [rows] = await pool.query("SELECT 1 AS ok");
    return Response.json({ ok: true, rows });
  } catch (e: any) {
    return Response.json(
      { ok: false, error: e?.message ?? String(e) },
      { status: 500 }
    );
  }
}

