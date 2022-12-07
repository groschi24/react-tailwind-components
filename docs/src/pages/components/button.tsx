import { NextPage } from 'next';

import { Button, Card, Typographie } from '@wirecore/wirestyle';
import { Prism } from '@wirecore/wirestyle-prism';

const ButtonPage: NextPage = () => {
  return (
    <div>
      <div className='flex flex-col gap-4 mb-8'>
        <Typographie size='4xl' weight='black'>
          Button
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

      <div className='flex flex-col gap-4'>
        <div>
          <Card className='md:rounded-b-none border-b-0'>
            <div className='flex items-center justify-center gap-2'>
              <Button>Test Button</Button>
              <Button color='info'>Test Button</Button>
              <Button color='danger' compact>
                Compact
              </Button>
              <Button color='success' outline>
                Test Button
              </Button>
              <Button color='warning' disabled>
                Test Button
              </Button>
            </div>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode}
          </Prism>
        </div>

        <div>
          <Card className='md:rounded-b-none border-b-0'>
            <div className='flex items-center justify-center gap-2'>
              <Button>Default</Button>
              <Button color='white'>White</Button>
              <Button color='light'>Light</Button>
              <Button color='dark'>Dark</Button>
              <Button color='info'>Info</Button>
              <Button color='warning'>Warning</Button>
              <Button color='danger'>Danger</Button>
              <Button color='success'>Success</Button>
            </div>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode2}
          </Prism>
        </div>

        <div>
          <Card className='md:rounded-b-none border-b-0'>
            <div className='flex items-center justify-center gap-2'>
              <Button outline>Default</Button>
              <Button color='white' outline>
                White
              </Button>
              <Button color='light' outline>
                Light
              </Button>
              <Button color='dark' outline>
                Dark
              </Button>
              <Button color='info' outline>
                Info
              </Button>
              <Button color='warning' outline>
                Warning
              </Button>
              <Button color='danger' outline>
                Danger
              </Button>
              <Button color='success' outline>
                Success
              </Button>
            </div>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode3}
          </Prism>
        </div>

        <div>
          <Card className='md:rounded-b-none border-b-0'>
            <div className='flex items-center justify-center gap-2'>
              <Button size='xs'>Settings</Button>
              <Button size='sm'>Settings</Button>
              <Button size='md'>Settings</Button>
              <Button size='lg'>Settings</Button>
              <Button size='xl'>Settings</Button>
            </div>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode4}
          </Prism>
        </div>

        <div>
          <Card className='md:rounded-b-none border-b-0'>
            <div className='flex items-center justify-center gap-2'>
              <Button size='xs' compact>
                Settings
              </Button>
              <Button size='sm' compact>
                Settings
              </Button>
              <Button size='md' compact>
                Settings
              </Button>
              <Button size='lg' compact>
                Settings
              </Button>
              <Button size='xl' compact>
                Settings
              </Button>
            </div>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode5}
          </Prism>
        </div>

        <div>
          <Card className='md:rounded-b-none border-b-0'>
            <div className='flex items-center justify-center gap-2'>
              <Button radius='xs'>Settings</Button>
              <Button radius='sm'>Settings</Button>
              <Button radius='md'>Settings</Button>
              <Button radius='lg'>Settings</Button>
              <Button radius='xl'>Settings</Button>
            </div>
          </Card>
          <Prism className='md:rounded-t-none' language='jsx'>
            {exampleCode6}
          </Prism>
        </div>
      </div>
    </div>
  );
};

const exampleCode = `
import { Button } from '@wirecore/wirestyle';

function Demo() {
  return (
    <Button>Test Button</Button>
    <Button color='info'>Test Button</Button>
    <Button color='danger' small>
      Test Button
    </Button>
    <Button color='success' outline>
      Test Button
    </Button>
    <Button color='warning' disabled>
      Test Button
    </Button>
  );
}
`;

const exampleCode2 = `
import { Button } from '@wirecore/wirestyle';

function Demo() {
  return (
    <Button>Default</Button>
    <Button color='white'>White</Button>
    <Button color='light'>Light</Button>
    <Button color='dark'>Dark</Button>
    <Button color='info'>Info</Button>
    <Button color='warning'>Warning</Button>
    <Button color='danger'>Danger</Button>
    <Button color='success'>Success</Button>
  );
}
`;

const exampleCode3 = `
import { Button } from '@wirecore/wirestyle';

function Demo() {
  return (
    <Button outline>Default</Button>
    <Button color='white' outline>
      White
    </Button>
    <Button color='light' outline>
      Light
    </Button>
    <Button color='dark' outline>
      Dark
    </Button>
    <Button color='info' outline>
      Info
    </Button>
    <Button color='warning' outline>
      Warning
    </Button>
    <Button color='danger' outline>
      Danger
    </Button>
    <Button color='success' outline>
      Success
    </Button>
  );
}
`;

const exampleCode4 = `
import { Button } from '@wirecore/wirestyle';

function Demo() {
  return (
    <Button size='xs'>Settings</Button>
    <Button size='sm'>Settings</Button>
    <Button size='md'>Settings</Button>
    <Button size='lg'>Settings</Button>
    <Button size='xl'>Settings</Button>
  );
}
`;

const exampleCode5 = `
import { Button } from '@wirecore/wirestyle';

function Demo() {
  return (
    <Button size='xs' compact>
      Settings
    </Button>
    <Button size='sm' compact>
      Settings
    </Button>
    <Button size='md' compact>
      Settings
    </Button>
    <Button size='lg' compact>
      Settings
    </Button>
    <Button size='xl' compact>
      Settings
    </Button>
  );
}
`;

const exampleCode6 = `
import { Button } from '@wirecore/wirestyle';

function Demo() {
  return (
    <Button radius='xs'>Settings</Button>
    <Button radius='sm'>Settings</Button>
    <Button radius='md'>Settings</Button>
    <Button radius='lg'>Settings</Button>
    <Button radius='xl'>Settings</Button>
  );
}
`;

export default ButtonPage;
