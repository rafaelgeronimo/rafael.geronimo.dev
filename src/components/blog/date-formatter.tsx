import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type DateFormaterProps = {
  dateString: string
}

export default function DateFormatter({ dateString }: DateFormaterProps) {
  const start = Object.values(dateString)
  const fullDate = start[0]
  const date = parseISO(fullDate)
  
  return <time dateTime={dateString}>{format(date, 'd LLLL, yyyy', {
    locale: ptBR,
  })}</time>
}
