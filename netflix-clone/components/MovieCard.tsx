import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { BsChevronDown } from 'react-icons/bs'
import { FaPlay } from 'react-icons/fa'
import FavoriteButton from './FavoriteButton'

interface MovieCardProps {
    data: any
}

const styles = {
    container: 'col-span group relative h-[12vw] bg-zinc-900',
    image: 'duration h-[12vw] w-full cursor-pointer rounded-md object-cover shadow-xl transition delay-300 group-hover:opacity-90 sm:group-hover:opacity-0',
    fContainer: `invisible absolute top-0 z-10 w-full scale-0 opacity-0 transition delay-300 duration-200 group-hover:-translate-y-[6vw] group-hover:translate-x-[2vw] group-hover:scale-110 group-hover:opacity-100 sm:visible`,
    fImage: `duration h-[12vw] w-full cursor-pointer rounded-t-md object-cover shadow-xl transition`,
    fActionContainer: `absolute z-10 w-full rounded-b-md bg-zinc-800 p-2 shadow-md transition lg:p-4`,
    fActionInnerContainer: `flex flex-row items-center gap-3`,
    playIconWrapper: `flex h-6 w-6 cursor-pointer items-center justify-center rounded-full bg-white transition hover:bg-neutral-300 lg:h-10 lg:w-10`,
    playIcon: `w-4 text-black lg:w-6`,
    chevronIconWrapper: `group/item ml-auto flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white transition hover:border-neutral-300 lg:h-10 lg:w-10`,
    chevronIcon: `w-4 text-white group-hover/item:text-neutral-300 lg:w-6`,
    dateParagraph: `mt-4 font-semibold text-green-400`,
    dateSpan: `text-white`,
    genreParagraphWrapper: `mt-4 flex flex-row items-center gap-2 text-[8px] text-white lg:text-sm`,
    durationParagraphWrapper: `mt-4 flex flex-row items-center gap-2`,
    durationParagraph: `text-[10px] text-white lg:text-sm`,
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
    return (
        <div className={styles['container']}>
            <img
                src={data.thumbnailUrl}
                alt='Movie'
                draggable={false}
                className={styles['image']}
            />
            <div className={styles['fContainer']}>
                <img
                    src={data.thumbnailUrl}
                    alt='Movie'
                    draggable={false}
                    className={styles['fImage']}
                />
                <div className={styles['fActionContainer']}>
                    <div className={styles['fActionInnerContainer']}>
                        <div className={styles['playIconWrapper']}>
                            <FaPlay className={styles['playIcon']} />
                        </div>
                        <div
                            onClick={() => {}}
                            className={styles['chevronIconWrapper']}
                        >
                            <BsChevronDown className={styles['chevronIcon']} />
                        </div>
                        <FavoriteButton movieId={data?.id} />
                    </div>
                    <p className={styles['dateParagraph']}>
                        New <span className={styles['dateSpan']}>2023</span>
                    </p>
                    <div className={styles['durationParagraphWrapper']}>
                        <p className={styles['durationParagraph']}>
                            {data.duration}
                        </p>
                    </div>
                    <div className={styles['genreParagraphWrapper']}>
                        <p>{data.genre}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
