import pool from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const [rows] = await pool.query<{ count: number }[]>(
      'SELECT COUNT(*) as count FROM early_access'
    );

    const count = rows[0]?.count ?? 0;
    const threshold = Number(process.env.EARLY_ACCESS_STATS_THRESHOLD || 100);

    return Response.json({
      early_adopters: count,
      raw_count: count,
      show_stats: count >= threshold,
      threshold,
    });
  } catch (error) {
    console.error('Stats lookup failed:', error);

    return Response.json({
      early_adopters: 0,
      raw_count: 0,
      show_stats: false,
    });
  }
}
