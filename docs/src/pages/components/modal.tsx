import { NextPage } from 'next';

import { Button, Card, Modal, Typographie } from '@wirecore/wirestyle';
import { Code, Prism } from '@wirecore/wirestyle-prism';
import { useState } from 'react';

const ModalPage: NextPage = () => {
  const [active, setActive] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  return (
    <div>
      <div className='flex flex-col gap-4 mb-8'>
        <Typographie size='4xl' weight='black'>
          Modal
        </Typographie>

        <Typographie
          size='sm'
          spacing='wider'
          className='text-gray-700 dark:text-gray-300'
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum.
        </Typographie>
      </div>

      <div className='flex flex-col gap-2 my-4'>
        <Code color='danger'>React.createElement()</Code>

        <Code>{exampleCode}</Code>
      </div>

      <div className='flex flex-col gap-2 my-4'>
        <Prism language='jsx'>{exampleCode}</Prism>
      </div>

      <div className='flex flex-col gap-4'>
        <div>
          <Card className='flex items-center justify-center md:rounded-b-none border-b-0'>
            <Button onClick={() => setActive((a) => !a)}>Open Modal</Button>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode}
          </Prism>
        </div>

        <div>
          <Card className='flex items-center justify-center md:rounded-b-none border-b-0'>
            <Button onClick={() => setScrollActive((a) => !a)}>
              Open Scroll Modal
            </Button>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode2}
          </Prism>
        </div>
      </div>

      <Modal isActive={active} onClose={() => setActive(false)}>
        <p>Modal</p>
      </Modal>

      <Modal
        isActive={scrollActive}
        onClose={() => setScrollActive(false)}
        disableScrollLock
      >
        Modal 2
      </Modal>
    </div>
  );
};

const exampleCode = `
import { useState } from 'react';
import { Button, Modal } from '@wirecore/wirestyle';

function Demo() {
  const [active, setActive] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setActive((a) => !a)}>Open Modal</Button>

      <Modal isActive={active} onClose={() => setActive(false)}>
        Modal
      </Modal>
    </div>
  );
}
`;

const exampleCode2 = `
import { useState } from 'react';
import { Button, Modal } from '@wirecore/wirestyle';

function Demo() {
  const [active, setActive] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);

  return (
    <div>
      <Button onClick={() => setScrollActive((a) => !a)}>
        Open Scroll Modal
      </Button>
      
      <Modal
        isActive={scrollActive}
        onClose={() => setScrollActive(false)}
        disableScrollLock
        >
          Modal 2
      </Modal>
    </div>
  );
}
`;

export default ModalPage;
