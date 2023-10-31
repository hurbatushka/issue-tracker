import { Flex, Text, Button } from '@radix-ui/themes';
import { MdReportProblem } from 'react-icons/md';
import Link from 'next/link';
export default function Home() {
  return (
    <Flex direction="column" gap="2">
      <Link href="/issues/new">
        <Button>
          <MdReportProblem />
          Сообщить о проблеме
        </Button>
      </Link>
    </Flex>
  );
}
