import React from 'react'

export const PageNotFound = () => {
    return (
        <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <h2 className="text-6xl font-semibold text-indigo-600">404</h2>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                    Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                    Lo sentimos, la pagina que busca no se encuentra
                </p>

            </div>
        </main>
    )
}
