import { parseISO, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

type Props = {
  dateString: string
}

export default function DateFormatter({ dateString }: Props) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'd LLLL, yyyy', {
    locale: ptBR,
  })}</time>
}
