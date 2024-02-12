"use client";
import "./pager.scss";

import { useCallback, useEffect, useState } from "react";
import {
  faAnglesLeft,
  faChevronLeft,
  faAnglesRight,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../providers/theme";
import { getPrimaryTheme, getSecondaryTheme } from "../../utils/provider.utils";

const pagerMax = 5;

export type PagerProps = {
  num: number;
  max: number;
  onClick: Function;
};

export default function Pager({ num, max, onClick }: PagerProps) {
  const { theme } = useTheme();
  const [pages, setPages] = useState<number[]>([]);

  useEffect(() => {
    let array = [];
    for (let i = 0; i < max; i++) {
      const page = i + 1;
      if (num - 2 <= page && page <= num + 2 && array.length < pagerMax) {
        array.push(page);
      }
    }
    setPages(array);
  }, [num, max]);

  const getNumList = useCallback(() => {
    return (
      <>
        {pages.map((value, idx) => {
          return (
            <div
              key={value}
              className={`pager ${
                num == value ? getPrimaryTheme(theme) : getSecondaryTheme(theme)
              }`}
              onClick={() => onClick(idx + 1)}
            >
              {value}
            </div>
          );
        })}
      </>
    );
  }, [num, max, pages, theme]);

  const clickEvent = useCallback(
    (n: number) => {
      if (n > max || n < 1) return;
      onClick(n);
    },
    [max]
  );

  return (
    <div className={"pagers"}>
      {/* 最初 */}
      <div
        className={`pager ${getSecondaryTheme(theme)}`}
        onClick={() => {
          if (num != 1) clickEvent(1);
        }}
      >
        <FontAwesomeIcon icon={faAnglesLeft} />
      </div>
      {/* 1つ前 */}
      <div
        className={`pager ${getSecondaryTheme(theme)}`}
        onClick={() => clickEvent(num - 1)}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      {/* 1 ~ max 最大数を横幅で変える? */}
      {getNumList()}
      {/* 1つ後 */}
      <div
        className={`pager ${getSecondaryTheme(theme)}`}
        onClick={() => clickEvent(num + 1)}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      {/* 最後 */}
      <div
        className={`pager ${getSecondaryTheme(theme)}`}
        onClick={() => {
          if (num != max) clickEvent(max);
        }}
      >
        <FontAwesomeIcon icon={faAnglesRight} />
      </div>
    </div>
  );
}
