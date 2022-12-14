import Image from 'next/image';
import {ChangeEventHandler, createRef, FormEventHandler, Fragment, useEffect, useState} from 'react';

import {Button} from '~/common/button';
import {Card} from '~/common/card';
import {Checkbox} from '~/common/checkbox';
import {Container} from '~/common/container';
import {Input} from '~/common/input';
import {Modal} from '~/common/modal';
import {useBreakpoint} from '~/common/use-breakpoint';

import {initialSearchValues, SearchValues} from './search-form-config';

interface Props {
  isLoading?: boolean;
  onSubmit: (searchFormValues: SearchValues) => void;
}

export const SearchBar: React.FC<Props> = ({isLoading, onSubmit}) => {
  const breakpoint = useBreakpoint();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchValues, setSearchValues] = useState(initialSearchValues);

  const formRef = createRef<HTMLFormElement>();

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    onSubmit(searchValues);
  };

  const handleModalSubmit = () => {
    setIsModalOpen(false);
    formRef.current?.dispatchEvent(new Event('submit', {bubbles: true, cancelable: true}));
  };

  const handleLocationChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setSearchValues((currentSearchValues) => ({...currentSearchValues, location: event.target.value}));

  const handlePositionChange: ChangeEventHandler<HTMLInputElement> = (event) =>
    setSearchValues((currentSearchValues) => ({...currentSearchValues, position: event.target.value}));

  const handleIsFullTimeChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValues((currentSearchValues) => ({...currentSearchValues, isFullTime: event.target.checked}));
  };

  useEffect(() => {
    if (breakpoint !== 'mobile') setIsModalOpen(false);
  }, [breakpoint]);

  return (
    <Fragment>
      <Modal isOpen={isModalOpen}>
        <Container size="tiny">
          <Card>
            <div className="flex items-center gap-x-3 border-b border-gray-700/20 py-3 px-6">
              <Image alt="Location" height={24} src="/svgs/icon-location-contrast.svg" width={17} />
              <Input
                name="location"
                onChange={handleLocationChange}
                placeholder="Filter by location..."
                value={searchValues.location}
              />
            </div>
            <div className="p-6">
              <Checkbox checked={searchValues.isFullTime} name="isFullTime" onChange={handleIsFullTimeChange}>
                Full Time Only
              </Checkbox>
              <Button className="mt-6 w-full" onClick={handleModalSubmit}>
                Search
              </Button>
            </div>
          </Card>
        </Container>
      </Modal>
      <Card>
        <form ref={formRef} className="flex" onSubmit={handleSubmit}>
          <div className="grid grow grid-cols-1 tablet:grid-cols-[51%_1fr] desktop:grid-cols-[60.5%_1fr]">
            <div className="flex items-center gap-x-3 py-4 px-5 tablet:border-r tablet:border-gray-700/20 tablet:pl-6 tablet:pr-1 desktop:px-8">
              <Image
                alt="Search"
                className="hidden tablet:block"
                height={28}
                src="/svgs/icon-search-contrast.svg"
                width={28}
              />
              <Input
                className="grow"
                name="position"
                onChange={handlePositionChange}
                placeholder="Filter by title..."
                value={searchValues.position}
              />
            </div>
            <div className="hidden tablet:flex tablet:items-center tablet:gap-x-3 tablet:border-r tablet:border-gray-700/20 tablet:pl-6 tablet:pr-1 desktop:pr-8">
              <Image alt="Location" height={24} src="/svgs/icon-location-contrast.svg" width={17} />
              <Input
                className="grow"
                name="location"
                onChange={handleLocationChange}
                placeholder="Filter by location..."
                value={searchValues.location}
              />
            </div>
          </div>
          <div className="flex min-w-fit items-center gap-x-2.5 pr-4 pl-5 tablet:gap-x-7 desktop:gap-x-6.5 desktop:pl-8">
            <Button className="tablet:hidden" onClick={() => setIsModalOpen(true)} size="square" variant="transparent">
              <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                <path
                  className="fill-gray-700 dark:fill-white"
                  d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
                  fillRule="nonzero"
                />
              </svg>
            </Button>
            <div className="hidden tablet:block">
              <Checkbox checked={searchValues.isFullTime} name="isFullTime" onChange={handleIsFullTimeChange}>
                Full Time <span className="hidden desktop:inline">Only</span>
              </Checkbox>
            </div>
            <Button className="tablet:hidden" isLoading={isLoading} size="square" type="submit">
              <Image alt="Search" height={20} src="/svgs/icon-search.svg" width={20} />
            </Button>
            <Button className="hidden tablet:inline desktop:hidden" isLoading={isLoading} size="tiny" type="submit">
              Search
            </Button>
            <Button className="hidden desktop:inline" isLoading={isLoading} size="large" type="submit">
              Search
            </Button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};
