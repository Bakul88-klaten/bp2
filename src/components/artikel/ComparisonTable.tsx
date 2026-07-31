import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { warnaClass, type WarnaProduk } from '@/lib/produk-data'

export default function ComparisonTable({
  warna,
  title,
  headers,
  rows,
  caption,
}: {
  warna: WarnaProduk
  title?: string
  headers: string[]
  rows: string[][]
  caption?: string
}) {
  const c = warnaClass[warna]

  return (
    <div className="not-prose">
      {title && (
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">{title}</h3>
      )}
      <div className={`rounded-2xl border ${c.border} overflow-hidden bg-white shadow-xl ${c.shadow}`}>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-b-0">
              {headers.map((h, i) => (
                <TableHead
                  key={i}
                  className={`${c.bg} ${c.text} font-semibold text-sm py-3 whitespace-normal`}
                >
                  {h}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((row, ri) => (
              <TableRow key={ri}>
                {row.map((cell, ci) => (
                  <TableCell
                    key={ci}
                    className={`text-sm text-muted-foreground whitespace-normal align-top py-3 ${
                      ci === 0 ? 'font-medium text-foreground' : ''
                    }`}
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {caption && <p className="text-xs text-muted-foreground mt-2.5">{caption}</p>}
    </div>
  )
}
