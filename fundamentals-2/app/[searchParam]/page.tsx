import React from "react";
import getWikiResults from "@/lib/getWikiResults";
import Item from "./components/Item";

type Props = {
  params: {
    searchParam: string;
  };
};

export async function generateMetadata({ params: { searchParam } }: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchParam);
  const data = await wikiData;

  const displayParam = searchParam.replaceAll("%20", " ");

  if (!data?.query?.pages) {
    return {
      title: `${displayParam} not Found`,
    };
  }

  return {
    title: displayParam,
    description: `Search results for ${displayParam}`,
  };
}

export default async function SearchResults({
  params: { searchParam },
}: Props) {
  const wikiData: Promise<SearchResult> = getWikiResults(searchParam);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  const content = (
    <main className="bg-slate-00 mx-auto max-w-4xl bg-gray-200 py-2 min-h-screen">
      {results ? (
        Object.values(results).map((result) => (
          <Item key={result.pageid} result={result} />
        ))
      ) : (
        <h2 className="p-2 text-xl">{`${searchParam} not Found`}</h2>
      )}
    </main>
  );
  return content;
}
